import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-wiki');
}

export default function OfficialCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-wiki" />;
}
