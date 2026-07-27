import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-otmadness-server');
}

export default function LowExpOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-otmadness-server" />;
}
