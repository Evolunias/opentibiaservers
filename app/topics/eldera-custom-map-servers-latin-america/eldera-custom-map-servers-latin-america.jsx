import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-latin-america');
}

export default function ElderaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-latin-america" />;
}
