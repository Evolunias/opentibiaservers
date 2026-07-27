import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-create-account');
}

export default function RealMapOtmadnessCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-create-account" />;
}
