import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-wiki');
}

export default function NewSeasonRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-wiki" />;
}
