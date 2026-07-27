import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-wiki');
}

export default function FreshStartOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-wiki" />;
}
