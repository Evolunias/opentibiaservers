import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-argentina');
}

export default function FreshStartWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-argentina" />;
}
