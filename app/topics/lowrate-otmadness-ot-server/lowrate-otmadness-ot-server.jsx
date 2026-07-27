import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-ot-server');
}

export default function LowrateOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-ot-server" />;
}
