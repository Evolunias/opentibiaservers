import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-rules');
}

export default function NewSeasonMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-rules" />;
}
