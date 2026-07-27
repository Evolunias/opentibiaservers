import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-europe');
}

export default function NoxiousotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-europe" />;
}
