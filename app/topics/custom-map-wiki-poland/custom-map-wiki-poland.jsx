import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-poland');
}

export default function CustomMapWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-poland" />;
}
