import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-canada');
}

export default function RealMapWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-canada" />;
}
