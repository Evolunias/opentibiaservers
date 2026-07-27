import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-wiki');
}

export default function NewSeasonRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-wiki" />;
}
