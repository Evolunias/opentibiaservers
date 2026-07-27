import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-poland');
}

export default function RuthlessChaosRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-poland" />;
}
