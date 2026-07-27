import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-south-america');
}

export default function ThaisotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-south-america" />;
}
