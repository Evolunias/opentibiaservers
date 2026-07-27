import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-ots');
}

export default function TopRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-ots" />;
}
