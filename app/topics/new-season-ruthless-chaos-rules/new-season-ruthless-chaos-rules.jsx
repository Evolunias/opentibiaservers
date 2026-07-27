import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-rules');
}

export default function NewSeasonRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-rules" />;
}
