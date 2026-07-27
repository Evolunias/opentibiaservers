import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-wiki');
}

export default function LowrateRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-wiki" />;
}
