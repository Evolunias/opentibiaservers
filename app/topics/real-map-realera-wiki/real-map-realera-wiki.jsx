import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-wiki');
}

export default function RealMapRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-wiki" />;
}
