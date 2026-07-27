import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-wiki');
}

export default function HighrateOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-wiki" />;
}
