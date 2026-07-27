import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-argentina');
}

export default function CustomMapStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-argentina" />;
}
