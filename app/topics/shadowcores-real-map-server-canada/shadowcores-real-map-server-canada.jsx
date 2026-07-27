import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-canada');
}

export default function ShadowcoresRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-canada" />;
}
