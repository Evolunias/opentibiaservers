import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-usa');
}

export default function CustomMapServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-usa" />;
}
