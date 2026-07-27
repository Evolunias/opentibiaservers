import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-latin-america');
}

export default function PvpeWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-latin-america" />;
}
