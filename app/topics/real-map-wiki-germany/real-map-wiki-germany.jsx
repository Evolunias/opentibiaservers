import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-germany');
}

export default function RealMapWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-germany" />;
}
