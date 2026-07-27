import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-north-america');
}

export default function RuthlessChaosCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-north-america" />;
}
