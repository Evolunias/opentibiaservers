import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-ot');
}

export default function CurrentRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-ot" />;
}
