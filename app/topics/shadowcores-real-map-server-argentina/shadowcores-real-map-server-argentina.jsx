import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-argentina');
}

export default function ShadowcoresRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-argentina" />;
}
