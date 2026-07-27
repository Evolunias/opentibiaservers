import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-6-pvp-enforced-server');
}

export default function Madnessalive76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-6-pvp-enforced-server" />;
}
