import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map');
}

export default function ShadowcoresRealMapKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map" />;
}
