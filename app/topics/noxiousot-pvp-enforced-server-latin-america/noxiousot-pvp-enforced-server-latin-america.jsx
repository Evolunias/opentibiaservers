import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-latin-america');
}

export default function NoxiousotPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-latin-america" />;
}
