import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-north-america');
}

export default function RuthlessChaosRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-north-america" />;
}
