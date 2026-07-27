import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-wiki');
}

export default function NoResetRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-wiki" />;
}
