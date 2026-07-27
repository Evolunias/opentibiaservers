import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-sweden');
}

export default function RealMapWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-sweden" />;
}
