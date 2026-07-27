import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-north-america');
}

export default function CustomMapWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-north-america" />;
}
