import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-usa');
}

export default function FreshStartWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-usa" />;
}
