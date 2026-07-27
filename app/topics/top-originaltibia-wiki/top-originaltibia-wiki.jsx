import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-wiki');
}

export default function TopOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-wiki" />;
}
