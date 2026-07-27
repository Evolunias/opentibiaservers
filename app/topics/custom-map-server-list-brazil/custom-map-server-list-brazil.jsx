import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-brazil');
}

export default function CustomMapServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-brazil" />;
}
