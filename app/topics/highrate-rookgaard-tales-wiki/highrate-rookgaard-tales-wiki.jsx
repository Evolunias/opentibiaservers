import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-wiki');
}

export default function HighrateRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-wiki" />;
}
