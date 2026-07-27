import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-wiki');
}

export default function HighrateNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-wiki" />;
}
