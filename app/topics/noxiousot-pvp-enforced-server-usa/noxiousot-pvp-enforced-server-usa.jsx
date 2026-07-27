import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-usa');
}

export default function NoxiousotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-usa" />;
}
