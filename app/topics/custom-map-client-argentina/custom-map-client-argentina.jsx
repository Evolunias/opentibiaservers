import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-argentina');
}

export default function CustomMapClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-argentina" />;
}
