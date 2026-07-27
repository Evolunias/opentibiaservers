import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-usa');
}

export default function RealMapWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-usa" />;
}
