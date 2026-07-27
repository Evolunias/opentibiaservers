import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-wiki');
}

export default function OfficialRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-wiki" />;
}
