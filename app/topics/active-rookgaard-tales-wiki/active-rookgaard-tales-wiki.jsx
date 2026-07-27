import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-wiki');
}

export default function ActiveRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-wiki" />;
}
