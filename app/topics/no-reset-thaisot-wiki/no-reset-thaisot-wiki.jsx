import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-wiki');
}

export default function NoResetThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-wiki" />;
}
