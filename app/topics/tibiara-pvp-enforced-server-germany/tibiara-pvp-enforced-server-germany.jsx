import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-germany');
}

export default function TibiaraPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-germany" />;
}
