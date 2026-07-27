import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-rules');
}

export default function NewSeasonTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-rules" />;
}
