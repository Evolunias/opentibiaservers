import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-canada');
}

export default function ThaisotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-canada" />;
}
