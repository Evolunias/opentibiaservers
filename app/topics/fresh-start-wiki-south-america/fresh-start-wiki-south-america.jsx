import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-south-america');
}

export default function FreshStartWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-south-america" />;
}
