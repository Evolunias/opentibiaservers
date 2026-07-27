import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-rules');
}

export default function BestArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-rules" />;
}
