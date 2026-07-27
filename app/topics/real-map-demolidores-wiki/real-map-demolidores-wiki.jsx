import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-wiki');
}

export default function RealMapDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-wiki" />;
}
