import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-europe');
}

export default function RuthlessChaosRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-europe" />;
}
