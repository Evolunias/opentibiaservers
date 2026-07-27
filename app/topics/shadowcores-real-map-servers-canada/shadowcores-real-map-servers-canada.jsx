import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-canada');
}

export default function ShadowcoresRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-canada" />;
}
