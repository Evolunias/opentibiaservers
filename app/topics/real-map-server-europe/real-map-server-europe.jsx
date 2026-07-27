import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-europe');
}

export default function RealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-europe" />;
}
