import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-wiki');
}

export default function RealMapTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-wiki" />;
}
