import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-client');
}

export default function LowrateOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-client" />;
}
