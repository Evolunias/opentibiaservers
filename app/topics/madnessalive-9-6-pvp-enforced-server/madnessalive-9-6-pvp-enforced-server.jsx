import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-9-6-pvp-enforced-server');
}

export default function Madnessalive96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-9-6-pvp-enforced-server" />;
}
