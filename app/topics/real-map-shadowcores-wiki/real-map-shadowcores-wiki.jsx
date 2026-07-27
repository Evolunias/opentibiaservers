import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-wiki');
}

export default function RealMapShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-wiki" />;
}
