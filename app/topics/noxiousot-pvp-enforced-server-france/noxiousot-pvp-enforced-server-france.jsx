import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-france');
}

export default function NoxiousotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-france" />;
}
