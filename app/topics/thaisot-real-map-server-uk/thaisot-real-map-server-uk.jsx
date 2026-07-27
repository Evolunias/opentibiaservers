import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-uk');
}

export default function ThaisotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-uk" />;
}
