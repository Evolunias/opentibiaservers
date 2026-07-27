import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-wiki');
}

export default function CustomRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-wiki" />;
}
