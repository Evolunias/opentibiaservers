import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-wiki');
}

export default function CustomCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-wiki" />;
}
