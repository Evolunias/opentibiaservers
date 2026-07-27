import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-wiki');
}

export default function NoResetUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-wiki" />;
}
