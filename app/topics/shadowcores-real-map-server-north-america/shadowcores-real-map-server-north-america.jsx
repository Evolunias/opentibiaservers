import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-north-america');
}

export default function ShadowcoresRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-north-america" />;
}
