import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-uk');
}

export default function NoxiousotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-uk" />;
}
