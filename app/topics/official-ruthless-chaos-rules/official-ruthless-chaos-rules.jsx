import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-rules');
}

export default function OfficialRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-rules" />;
}
