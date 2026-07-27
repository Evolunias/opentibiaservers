import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-wiki');
}

export default function HighrateArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-wiki" />;
}
