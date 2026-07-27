import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-wiki');
}

export default function TopCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-wiki" />;
}
