import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-europe');
}

export default function OtmadnessEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-europe" />;
}
