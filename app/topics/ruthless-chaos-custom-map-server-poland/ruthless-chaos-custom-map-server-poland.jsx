import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-custom-map-server-poland');
}

export default function RuthlessChaosCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-custom-map-server-poland" />;
}
