import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-sweden');
}

export default function FreshStartWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-sweden" />;
}
