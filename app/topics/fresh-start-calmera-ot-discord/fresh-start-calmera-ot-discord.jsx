import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-discord');
}

export default function FreshStartCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-discord" />;
}
