import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-rules');
}

export default function ActiveArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-rules" />;
}
