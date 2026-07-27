import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-wiki');
}

export default function FreshStartAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-wiki" />;
}
