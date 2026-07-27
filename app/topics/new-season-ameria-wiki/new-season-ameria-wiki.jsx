import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-wiki');
}

export default function NewSeasonAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-wiki" />;
}
