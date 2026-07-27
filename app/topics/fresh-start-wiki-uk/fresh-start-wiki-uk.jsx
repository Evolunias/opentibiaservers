import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-uk');
}

export default function FreshStartWikiUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-uk" />;
}
