import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-germany');
}

export default function NoxiousotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-germany" />;
}
