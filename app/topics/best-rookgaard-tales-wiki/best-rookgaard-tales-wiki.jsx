import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-wiki');
}

export default function BestRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-wiki" />;
}
