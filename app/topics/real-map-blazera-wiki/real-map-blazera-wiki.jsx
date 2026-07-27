import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-wiki');
}

export default function RealMapBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-wiki" />;
}
