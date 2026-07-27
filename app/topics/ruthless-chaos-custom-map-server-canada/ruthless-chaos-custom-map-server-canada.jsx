import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-canada');
}

export default function RuthlessChaosCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-canada" />;
}
