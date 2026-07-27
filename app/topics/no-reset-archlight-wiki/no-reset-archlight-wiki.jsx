import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-wiki');
}

export default function NoResetArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-wiki" />;
}
