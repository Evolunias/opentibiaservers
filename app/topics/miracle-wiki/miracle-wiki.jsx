import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-wiki');
}

export default function MiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="miracle-wiki" />;
}
