import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-wiki');
}

export default function PopularKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-wiki" />;
}
