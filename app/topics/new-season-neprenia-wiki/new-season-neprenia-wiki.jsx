import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-wiki');
}

export default function NewSeasonNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-wiki" />;
}
