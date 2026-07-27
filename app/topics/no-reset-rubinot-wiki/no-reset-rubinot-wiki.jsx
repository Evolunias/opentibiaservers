import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-wiki');
}

export default function NoResetRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-wiki" />;
}
