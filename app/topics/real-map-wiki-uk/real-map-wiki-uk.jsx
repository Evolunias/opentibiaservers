import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-uk');
}

export default function RealMapWikiUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-uk" />;
}
