import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-latin-america');
}

export default function BaiakWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-latin-america" />;
}
