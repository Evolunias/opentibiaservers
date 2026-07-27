import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-wiki');
}

export default function PopularRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-wiki" />;
}
