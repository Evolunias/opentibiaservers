import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-canada');
}

export default function RuthlessChaosCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-canada" />;
}
