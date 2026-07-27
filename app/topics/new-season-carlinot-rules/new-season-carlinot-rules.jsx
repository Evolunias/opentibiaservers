import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-rules');
}

export default function NewSeasonCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-rules" />;
}
