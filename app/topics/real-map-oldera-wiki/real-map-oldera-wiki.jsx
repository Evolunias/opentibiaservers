import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-wiki');
}

export default function RealMapOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-wiki" />;
}
