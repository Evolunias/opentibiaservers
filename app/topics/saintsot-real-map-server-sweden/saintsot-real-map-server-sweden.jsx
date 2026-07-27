import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-sweden');
}

export default function SaintsotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-sweden" />;
}
