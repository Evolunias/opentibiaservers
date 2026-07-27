import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-sweden');
}

export default function SaintsotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-sweden" />;
}
