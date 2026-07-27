import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-wiki');
}

export default function NoResetTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-wiki" />;
}
