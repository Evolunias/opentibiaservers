import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-discord');
}

export default function TopCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-discord" />;
}
