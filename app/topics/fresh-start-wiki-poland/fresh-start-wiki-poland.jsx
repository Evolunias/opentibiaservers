import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-poland');
}

export default function FreshStartWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-poland" />;
}
