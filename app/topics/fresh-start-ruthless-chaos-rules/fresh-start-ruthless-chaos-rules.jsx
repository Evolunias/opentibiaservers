import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-rules');
}

export default function FreshStartRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-rules" />;
}
