import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-europe');
}

export default function RealMapServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-europe" />;
}
