import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-wiki');
}

export default function NoResetOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-wiki" />;
}
