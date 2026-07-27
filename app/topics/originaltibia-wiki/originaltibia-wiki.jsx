import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-wiki');
}

export default function OriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-wiki" />;
}
