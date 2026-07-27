import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-brazil');
}

export default function ThaisotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-brazil" />;
}
