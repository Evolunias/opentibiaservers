import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-germany');
}

export default function BlazeraPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-germany" />;
}
