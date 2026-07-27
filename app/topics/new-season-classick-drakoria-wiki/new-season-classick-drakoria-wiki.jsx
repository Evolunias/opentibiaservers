import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-wiki');
}

export default function NewSeasonClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-wiki" />;
}
