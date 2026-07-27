import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-wiki');
}

export default function RealMapRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-wiki" />;
}
