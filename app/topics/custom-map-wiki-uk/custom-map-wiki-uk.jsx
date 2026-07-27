import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-uk');
}

export default function CustomMapWikiUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-uk" />;
}
