import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-wiki');
}

export default function CurrentNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-wiki" />;
}
