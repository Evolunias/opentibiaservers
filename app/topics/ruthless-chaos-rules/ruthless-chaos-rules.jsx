import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-rules');
}

export default function RuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-rules" />;
}
