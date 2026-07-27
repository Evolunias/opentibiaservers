import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-wiki');
}

export default function CustomMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-wiki" />;
}
