import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-wiki');
}

export default function FreshStartKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-wiki" />;
}
