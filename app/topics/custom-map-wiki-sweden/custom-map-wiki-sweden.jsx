import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-sweden');
}

export default function CustomMapWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-sweden" />;
}
