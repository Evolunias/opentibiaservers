import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-login');
}

export default function RealMapOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-login" />;
}
