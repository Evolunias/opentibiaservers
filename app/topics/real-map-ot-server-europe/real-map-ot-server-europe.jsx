import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-europe');
}

export default function RealMapOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-europe" />;
}
