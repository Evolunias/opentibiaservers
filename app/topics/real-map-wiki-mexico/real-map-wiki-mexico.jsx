import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-mexico');
}

export default function RealMapWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-mexico" />;
}
