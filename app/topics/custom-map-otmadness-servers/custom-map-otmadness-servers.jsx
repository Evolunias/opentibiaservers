import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-otmadness-servers');
}

export default function CustomMapOtmadnessServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-otmadness-servers" />;
}
