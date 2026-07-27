import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-sweden');
}

export default function CustomMapStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-sweden" />;
}
