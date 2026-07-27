import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-south-america');
}

export default function ThaisotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-south-america" />;
}
