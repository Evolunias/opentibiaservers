import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-wiki');
}

export default function NoResetAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-wiki" />;
}
