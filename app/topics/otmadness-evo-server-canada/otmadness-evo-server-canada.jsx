import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-canada');
}

export default function OtmadnessEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-canada" />;
}
