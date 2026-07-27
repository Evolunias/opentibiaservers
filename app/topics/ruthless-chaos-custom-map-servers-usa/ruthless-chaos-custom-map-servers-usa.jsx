import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-usa');
}

export default function RuthlessChaosCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-usa" />;
}
