import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-canada');
}

export default function NoxiousotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-canada" />;
}
