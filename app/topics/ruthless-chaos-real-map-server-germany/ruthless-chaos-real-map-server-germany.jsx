import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-germany');
}

export default function RuthlessChaosRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-germany" />;
}
