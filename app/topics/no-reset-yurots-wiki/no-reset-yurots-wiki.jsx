import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-wiki');
}

export default function NoResetYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-wiki" />;
}
