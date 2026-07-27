import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-wiki');
}

export default function CurrentKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-wiki" />;
}
