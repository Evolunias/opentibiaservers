import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-wiki');
}

export default function NewSeasonRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-wiki" />;
}
