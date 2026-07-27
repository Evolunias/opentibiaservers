import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-wiki');
}

export default function NewSeasonThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-wiki" />;
}
