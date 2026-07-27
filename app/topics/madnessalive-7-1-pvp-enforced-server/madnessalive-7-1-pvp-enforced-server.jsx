import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-pvp-enforced-server');
}

export default function Madnessalive71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-pvp-enforced-server" />;
}
