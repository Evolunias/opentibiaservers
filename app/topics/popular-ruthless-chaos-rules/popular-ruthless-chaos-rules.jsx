import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-rules');
}

export default function PopularRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-rules" />;
}
