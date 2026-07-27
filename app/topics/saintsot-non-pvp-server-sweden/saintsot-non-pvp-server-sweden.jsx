import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-sweden');
}

export default function SaintsotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-sweden" />;
}
