import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-canada');
}

export default function FreshStartWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-canada" />;
}
