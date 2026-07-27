import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-map');
}

export default function RuthlessChaosMapKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-map" />;
}
