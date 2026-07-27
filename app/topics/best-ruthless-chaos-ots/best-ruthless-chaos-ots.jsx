import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-ots');
}

export default function BestRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-ots" />;
}
