import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-otmadness-server');
}

export default function CustomMapOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-otmadness-server" />;
}
