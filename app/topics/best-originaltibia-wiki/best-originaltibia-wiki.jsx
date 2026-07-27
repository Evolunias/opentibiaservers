import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-wiki');
}

export default function BestOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-wiki" />;
}
