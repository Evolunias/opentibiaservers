import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-login');
}

export default function LowrateOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-login" />;
}
