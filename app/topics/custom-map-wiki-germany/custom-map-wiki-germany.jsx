import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-germany');
}

export default function CustomMapWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-germany" />;
}
