import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-poland');
}

export default function RealMapWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-poland" />;
}
