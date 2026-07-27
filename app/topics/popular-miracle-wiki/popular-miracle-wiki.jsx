import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-wiki');
}

export default function PopularMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-wiki" />;
}
