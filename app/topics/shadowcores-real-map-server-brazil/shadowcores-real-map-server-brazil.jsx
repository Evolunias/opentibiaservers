import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-brazil');
}

export default function ShadowcoresRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-brazil" />;
}
