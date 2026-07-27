import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-rules');
}

export default function NewSeasonMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-rules" />;
}
