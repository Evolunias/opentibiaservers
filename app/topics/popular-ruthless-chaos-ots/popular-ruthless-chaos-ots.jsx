import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-ots');
}

export default function PopularRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-ots" />;
}
