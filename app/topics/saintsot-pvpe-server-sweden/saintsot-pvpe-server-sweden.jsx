import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-sweden');
}

export default function SaintsotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-sweden" />;
}
