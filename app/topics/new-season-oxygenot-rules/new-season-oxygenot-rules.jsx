import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-rules');
}

export default function NewSeasonOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-rules" />;
}
