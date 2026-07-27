import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-wiki');
}

export default function NoResetCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-wiki" />;
}
