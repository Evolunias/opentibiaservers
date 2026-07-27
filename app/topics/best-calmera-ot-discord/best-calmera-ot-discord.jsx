import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-discord');
}

export default function BestCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-discord" />;
}
