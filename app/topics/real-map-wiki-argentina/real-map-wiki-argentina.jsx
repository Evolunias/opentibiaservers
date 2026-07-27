import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-argentina');
}

export default function RealMapWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-argentina" />;
}
