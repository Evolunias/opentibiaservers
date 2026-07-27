import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-wiki');
}

export default function NoResetMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-wiki" />;
}
