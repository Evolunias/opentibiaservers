import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-sweden');
}

export default function TibiameNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-sweden" />;
}
