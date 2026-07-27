import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-rules');
}

export default function NewSeasonTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-rules" />;
}
