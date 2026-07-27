import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-wiki');
}

export default function TopNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-wiki" />;
}
