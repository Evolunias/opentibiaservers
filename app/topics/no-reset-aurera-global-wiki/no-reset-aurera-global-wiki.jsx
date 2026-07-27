import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-wiki');
}

export default function NoResetAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-wiki" />;
}
