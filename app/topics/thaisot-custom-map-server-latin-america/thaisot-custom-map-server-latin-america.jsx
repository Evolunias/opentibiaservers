import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-latin-america');
}

export default function ThaisotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-latin-america" />;
}
