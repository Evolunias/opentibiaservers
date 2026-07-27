import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-brazil');
}

export default function ThaisotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-brazil" />;
}
