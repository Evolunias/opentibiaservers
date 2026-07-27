import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-latin-america');
}

export default function ThaisotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-latin-america" />;
}
