import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-wiki');
}

export default function PopularTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-wiki" />;
}
