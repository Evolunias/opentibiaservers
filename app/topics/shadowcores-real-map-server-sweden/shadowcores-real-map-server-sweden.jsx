import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-sweden');
}

export default function ShadowcoresRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-sweden" />;
}
