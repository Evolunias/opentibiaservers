import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-north-america');
}

export default function ThaisotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-north-america" />;
}
