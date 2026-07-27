import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-rules');
}

export default function TopRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-rules" />;
}
