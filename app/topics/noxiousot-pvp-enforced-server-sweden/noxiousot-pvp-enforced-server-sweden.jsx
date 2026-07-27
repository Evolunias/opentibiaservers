import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-sweden');
}

export default function NoxiousotPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-sweden" />;
}
