import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-brazil');
}

export default function NoxiousotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-brazil" />;
}
