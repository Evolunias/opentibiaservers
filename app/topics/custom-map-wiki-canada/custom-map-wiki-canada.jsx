import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-canada');
}

export default function CustomMapWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-canada" />;
}
