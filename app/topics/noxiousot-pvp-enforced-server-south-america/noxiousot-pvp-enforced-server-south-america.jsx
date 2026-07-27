import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-south-america');
}

export default function NoxiousotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-south-america" />;
}
