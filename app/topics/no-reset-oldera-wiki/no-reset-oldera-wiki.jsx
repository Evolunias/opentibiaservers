import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-wiki');
}

export default function NoResetOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-wiki" />;
}
