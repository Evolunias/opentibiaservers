import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-usa');
}

export default function RuthlessChaosCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-usa" />;
}
