import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-wiki');
}

export default function NoResetImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-wiki" />;
}
