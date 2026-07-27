import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-wiki');
}

export default function NoResetCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-wiki" />;
}
