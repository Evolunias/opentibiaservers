import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-wiki');
}

export default function NewCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-wiki" />;
}
