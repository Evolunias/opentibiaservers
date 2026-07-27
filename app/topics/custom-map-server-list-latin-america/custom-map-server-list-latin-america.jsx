import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-latin-america');
}

export default function CustomMapServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-latin-america" />;
}
