import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-wiki');
}

export default function NewRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-wiki" />;
}
