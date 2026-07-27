import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-sweden');
}

export default function NoxiousotNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-sweden" />;
}
