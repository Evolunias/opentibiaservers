import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-rules');
}

export default function ActiveRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-rules" />;
}
