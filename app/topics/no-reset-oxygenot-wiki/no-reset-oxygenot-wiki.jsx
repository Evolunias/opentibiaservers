import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-wiki');
}

export default function NoResetOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-wiki" />;
}
