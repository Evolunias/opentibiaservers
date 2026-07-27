import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-real-map-server-latin-america');
}

export default function RuthlessChaosRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-real-map-server-latin-america" />;
}
