import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-wiki');
}

export default function NoResetMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-wiki" />;
}
