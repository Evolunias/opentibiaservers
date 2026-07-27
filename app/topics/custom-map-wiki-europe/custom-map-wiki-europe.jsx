import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-europe');
}

export default function CustomMapWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-europe" />;
}
