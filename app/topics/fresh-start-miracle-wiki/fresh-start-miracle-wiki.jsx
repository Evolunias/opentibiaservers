import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-wiki');
}

export default function FreshStartMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-wiki" />;
}
