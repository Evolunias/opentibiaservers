import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-wiki');
}

export default function PopularAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-wiki" />;
}
