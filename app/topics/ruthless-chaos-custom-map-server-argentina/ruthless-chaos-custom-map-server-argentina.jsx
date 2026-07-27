import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-argentina');
}

export default function RuthlessChaosCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-argentina" />;
}
