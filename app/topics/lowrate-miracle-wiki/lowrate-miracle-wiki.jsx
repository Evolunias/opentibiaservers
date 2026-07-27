import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-wiki');
}

export default function LowrateMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-wiki" />;
}
