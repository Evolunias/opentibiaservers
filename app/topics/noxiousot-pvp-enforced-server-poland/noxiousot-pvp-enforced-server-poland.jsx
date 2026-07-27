import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-poland');
}

export default function NoxiousotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-poland" />;
}
