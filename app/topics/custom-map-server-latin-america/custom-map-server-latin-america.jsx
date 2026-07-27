import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-latin-america');
}

export default function CustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-latin-america" />;
}
