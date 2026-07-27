import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-servers-argentina');
}

export default function RuthlessChaosCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-servers-argentina" />;
}
