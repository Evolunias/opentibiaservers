import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-south-america');
}

export default function ShadowcoresRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-south-america" />;
}
