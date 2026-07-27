import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-otmadness-server');
}

export default function EvoOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="evo-otmadness-server" />;
}
