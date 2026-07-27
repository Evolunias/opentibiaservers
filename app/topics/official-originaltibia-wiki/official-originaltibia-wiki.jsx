import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-wiki');
}

export default function OfficialOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-wiki" />;
}
