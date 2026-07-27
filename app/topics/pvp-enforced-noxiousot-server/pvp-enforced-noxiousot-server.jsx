import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-noxiousot-server');
}

export default function PvpEnforcedNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-noxiousot-server" />;
}
