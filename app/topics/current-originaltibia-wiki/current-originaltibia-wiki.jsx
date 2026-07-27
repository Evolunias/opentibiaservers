import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-wiki');
}

export default function CurrentOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-wiki" />;
}
