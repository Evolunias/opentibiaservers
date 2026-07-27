import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-sweden');
}

export default function AureraGlobalPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-sweden" />;
}
