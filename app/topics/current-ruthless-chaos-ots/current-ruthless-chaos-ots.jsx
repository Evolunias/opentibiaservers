import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-ots');
}

export default function CurrentRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-ots" />;
}
