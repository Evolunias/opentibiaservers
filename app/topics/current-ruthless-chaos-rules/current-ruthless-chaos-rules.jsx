import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-rules');
}

export default function CurrentRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-rules" />;
}
