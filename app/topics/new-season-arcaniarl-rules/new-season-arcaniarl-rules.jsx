import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-rules');
}

export default function NewSeasonArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-rules" />;
}
