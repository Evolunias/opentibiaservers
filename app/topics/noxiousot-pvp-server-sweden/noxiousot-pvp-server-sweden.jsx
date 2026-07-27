import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-sweden');
}

export default function NoxiousotPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-sweden" />;
}
