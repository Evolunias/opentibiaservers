import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-wiki');
}

export default function PopularNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-wiki" />;
}
