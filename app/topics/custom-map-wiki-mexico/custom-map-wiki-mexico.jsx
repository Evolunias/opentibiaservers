import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-mexico');
}

export default function CustomMapWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-mexico" />;
}
