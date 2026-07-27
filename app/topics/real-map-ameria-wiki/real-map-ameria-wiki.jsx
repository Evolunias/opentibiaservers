import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-wiki');
}

export default function RealMapAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-wiki" />;
}
