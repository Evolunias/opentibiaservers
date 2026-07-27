import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-wiki');
}

export default function CurrentMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-wiki" />;
}
