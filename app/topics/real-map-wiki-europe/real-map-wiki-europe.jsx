import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-europe');
}

export default function RealMapWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-europe" />;
}
