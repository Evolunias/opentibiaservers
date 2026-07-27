import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-germany');
}

export default function OtmadnessEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-germany" />;
}
