import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-wiki');
}

export default function RealMapOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-wiki" />;
}
