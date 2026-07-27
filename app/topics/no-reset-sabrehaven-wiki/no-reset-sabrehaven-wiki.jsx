import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-wiki');
}

export default function NoResetSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-wiki" />;
}
