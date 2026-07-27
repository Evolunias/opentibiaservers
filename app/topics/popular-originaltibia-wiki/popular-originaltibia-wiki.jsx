import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-wiki');
}

export default function PopularOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-wiki" />;
}
