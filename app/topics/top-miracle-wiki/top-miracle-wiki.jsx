import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-wiki');
}

export default function TopMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-wiki" />;
}
