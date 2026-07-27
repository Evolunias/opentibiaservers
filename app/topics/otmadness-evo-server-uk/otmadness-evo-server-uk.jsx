import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-uk');
}

export default function OtmadnessEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-uk" />;
}
