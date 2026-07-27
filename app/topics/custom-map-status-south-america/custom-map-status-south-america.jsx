import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-south-america');
}

export default function CustomMapStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-south-america" />;
}
