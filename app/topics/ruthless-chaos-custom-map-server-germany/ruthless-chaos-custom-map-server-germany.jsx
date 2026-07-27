import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-germany');
}

export default function RuthlessChaosCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-germany" />;
}
