import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-germany');
}

export default function FreshStartWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-germany" />;
}
