import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-wiki');
}

export default function CurrentRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-wiki" />;
}
