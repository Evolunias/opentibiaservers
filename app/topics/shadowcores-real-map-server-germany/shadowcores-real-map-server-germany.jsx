import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-germany');
}

export default function ShadowcoresRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-germany" />;
}
