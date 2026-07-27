import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-otmadness-server');
}

export default function HighExpOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-otmadness-server" />;
}
