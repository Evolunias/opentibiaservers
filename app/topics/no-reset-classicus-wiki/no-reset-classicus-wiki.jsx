import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-wiki');
}

export default function NoResetClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-wiki" />;
}
