import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-rules');
}

export default function PopularArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-rules" />;
}
