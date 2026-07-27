import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-discord');
}

export default function ActiveCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-discord" />;
}
