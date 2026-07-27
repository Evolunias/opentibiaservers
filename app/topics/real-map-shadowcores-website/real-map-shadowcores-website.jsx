import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-shadowcores-website');
}

export default function RealMapShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-shadowcores-website" />;
}
