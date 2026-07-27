import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-rules');
}

export default function CustomRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-rules" />;
}
