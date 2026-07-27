import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-wiki');
}

export default function LowrateOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-wiki" />;
}
