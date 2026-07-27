import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-mexico');
}

export default function ShadowcoresRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-mexico" />;
}
