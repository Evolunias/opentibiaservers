import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-usa');
}

export default function CustomMapWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-usa" />;
}
