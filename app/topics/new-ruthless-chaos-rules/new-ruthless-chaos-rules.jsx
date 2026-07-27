import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-rules');
}

export default function NewRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-rules" />;
}
