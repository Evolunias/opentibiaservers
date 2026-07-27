import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-server');
}

export default function LowrateOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-server" />;
}
