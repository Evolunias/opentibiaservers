import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-uk');
}

export default function ThaisotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-uk" />;
}
