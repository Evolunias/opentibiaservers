import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-wiki');
}

export default function ActiveOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-wiki" />;
}
