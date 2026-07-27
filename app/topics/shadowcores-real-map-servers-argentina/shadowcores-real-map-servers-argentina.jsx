import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-argentina');
}

export default function ShadowcoresRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-argentina" />;
}
