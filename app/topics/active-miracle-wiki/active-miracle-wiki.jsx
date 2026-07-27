import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-wiki');
}

export default function ActiveMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-wiki" />;
}
