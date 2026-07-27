import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-brazil');
}

export default function CustomMapStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-brazil" />;
}
