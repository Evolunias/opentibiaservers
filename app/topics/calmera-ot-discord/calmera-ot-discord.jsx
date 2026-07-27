import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-discord');
}

export default function CalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-discord" />;
}
