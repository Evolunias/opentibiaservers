import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-europe');
}

export default function ThaisotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-europe" />;
}
