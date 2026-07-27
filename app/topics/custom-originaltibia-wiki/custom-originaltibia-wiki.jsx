import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-wiki');
}

export default function CustomOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-wiki" />;
}
