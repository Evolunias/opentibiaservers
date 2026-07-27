import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-argentina');
}

export default function NoxiousotPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-argentina" />;
}
