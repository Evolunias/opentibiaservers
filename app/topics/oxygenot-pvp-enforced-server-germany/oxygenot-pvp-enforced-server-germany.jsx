import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-germany');
}

export default function OxygenotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-germany" />;
}
