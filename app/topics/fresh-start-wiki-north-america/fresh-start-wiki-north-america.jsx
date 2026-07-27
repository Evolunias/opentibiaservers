import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-north-america');
}

export default function FreshStartWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-north-america" />;
}
