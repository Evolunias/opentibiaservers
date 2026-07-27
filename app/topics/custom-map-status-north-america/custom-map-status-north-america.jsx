import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-north-america');
}

export default function CustomMapStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-north-america" />;
}
