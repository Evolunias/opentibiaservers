import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-north-america');
}

export default function ShadowcoresRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-north-america" />;
}
