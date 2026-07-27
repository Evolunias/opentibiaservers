import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-uk');
}

export default function RuthlessChaosRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-uk" />;
}
