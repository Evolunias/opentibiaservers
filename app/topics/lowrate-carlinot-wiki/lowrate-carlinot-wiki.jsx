import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-wiki');
}

export default function LowrateCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-wiki" />;
}
