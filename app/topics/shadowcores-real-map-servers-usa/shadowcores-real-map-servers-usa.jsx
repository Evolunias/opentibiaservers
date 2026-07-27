import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-usa');
}

export default function ShadowcoresRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-usa" />;
}
