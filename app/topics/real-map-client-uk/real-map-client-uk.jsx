import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-uk');
}

export default function RealMapClientUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-uk" />;
}
