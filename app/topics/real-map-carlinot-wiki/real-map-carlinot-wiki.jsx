import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-wiki');
}

export default function RealMapCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-wiki" />;
}
