import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-discord');
}

export default function CurrentCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-discord" />;
}
