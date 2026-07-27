import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-germany');
}

export default function KasteriaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-germany" />;
}
