import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-uk');
}

export default function ThaisotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-uk" />;
}
