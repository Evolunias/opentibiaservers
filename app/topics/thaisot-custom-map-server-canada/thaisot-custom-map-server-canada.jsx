import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-canada');
}

export default function ThaisotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-canada" />;
}
