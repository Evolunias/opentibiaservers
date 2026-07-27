import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-mexico');
}

export default function FreshStartWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-mexico" />;
}
