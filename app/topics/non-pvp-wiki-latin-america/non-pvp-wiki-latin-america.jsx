import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-latin-america');
}

export default function NonPvpWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-latin-america" />;
}
