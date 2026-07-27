import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-argentina');
}

export default function CustomMapServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-argentina" />;
}
