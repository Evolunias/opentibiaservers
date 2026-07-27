import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-europe');
}

export default function ThaisotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-europe" />;
}
