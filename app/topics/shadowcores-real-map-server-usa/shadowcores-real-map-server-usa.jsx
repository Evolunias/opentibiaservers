import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-usa');
}

export default function ShadowcoresRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-usa" />;
}
