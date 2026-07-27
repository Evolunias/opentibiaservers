import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-wiki');
}

export default function FreshStartNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-wiki" />;
}
