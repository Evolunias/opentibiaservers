import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-rules');
}

export default function BestRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-rules" />;
}
