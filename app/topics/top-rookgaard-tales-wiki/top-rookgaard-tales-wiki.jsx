import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-wiki');
}

export default function TopRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-wiki" />;
}
