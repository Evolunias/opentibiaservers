import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-wiki');
}

export default function ActiveCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-wiki" />;
}
