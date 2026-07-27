import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-argentina');
}

export default function RuthlessChaosRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-argentina" />;
}
