import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-wiki');
}

export default function RealMapRookgaardTalesWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-wiki" />;
}
