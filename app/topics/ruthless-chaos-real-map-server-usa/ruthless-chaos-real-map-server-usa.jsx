import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-usa');
}

export default function RuthlessChaosRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-usa" />;
}
