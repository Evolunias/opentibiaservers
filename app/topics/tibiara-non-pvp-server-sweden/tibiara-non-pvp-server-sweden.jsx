import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-sweden');
}

export default function TibiaraNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-sweden" />;
}
