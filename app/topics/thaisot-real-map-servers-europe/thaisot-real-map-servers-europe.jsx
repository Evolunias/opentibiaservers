import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-europe');
}

export default function ThaisotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-europe" />;
}
