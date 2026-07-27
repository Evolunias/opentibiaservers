import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-wiki');
}

export default function BestMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-wiki" />;
}
