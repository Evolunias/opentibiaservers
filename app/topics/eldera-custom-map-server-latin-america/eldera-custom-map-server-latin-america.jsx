import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-latin-america');
}

export default function ElderaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-latin-america" />;
}
