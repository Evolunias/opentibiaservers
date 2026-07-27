import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-brazil');
}

export default function CustomMapClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-brazil" />;
}
