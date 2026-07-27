import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-wiki');
}

export default function LowrateArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-wiki" />;
}
