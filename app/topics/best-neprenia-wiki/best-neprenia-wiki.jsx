import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-wiki');
}

export default function BestNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-wiki" />;
}
