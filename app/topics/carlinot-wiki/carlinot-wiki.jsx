import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-wiki');
}

export default function CarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="carlinot-wiki" />;
}
