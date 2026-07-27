import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-wiki');
}

export default function RookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-wiki" />;
}
