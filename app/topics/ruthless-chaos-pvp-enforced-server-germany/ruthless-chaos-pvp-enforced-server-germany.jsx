import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-germany');
}

export default function RuthlessChaosPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-germany" />;
}
