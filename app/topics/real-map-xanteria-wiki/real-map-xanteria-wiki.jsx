import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-wiki');
}

export default function RealMapXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-wiki" />;
}
