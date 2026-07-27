import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-north-america');
}

export default function NoxiousotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-north-america" />;
}
