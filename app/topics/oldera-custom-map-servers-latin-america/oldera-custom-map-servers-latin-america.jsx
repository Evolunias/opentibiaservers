import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-latin-america');
}

export default function OlderaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-latin-america" />;
}
