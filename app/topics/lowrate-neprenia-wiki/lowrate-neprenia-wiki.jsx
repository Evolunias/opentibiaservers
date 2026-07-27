import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-wiki');
}

export default function LowrateNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-wiki" />;
}
