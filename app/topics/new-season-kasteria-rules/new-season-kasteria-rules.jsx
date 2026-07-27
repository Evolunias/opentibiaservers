import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-rules');
}

export default function NewSeasonKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-rules" />;
}
