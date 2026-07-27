import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-mexico');
}

export default function CustomMapServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-mexico" />;
}
