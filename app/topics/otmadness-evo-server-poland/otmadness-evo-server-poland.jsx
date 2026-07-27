import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-poland');
}

export default function OtmadnessEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-poland" />;
}
