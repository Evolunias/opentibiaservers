import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-pvp-enforced-server');
}

export default function Madnessalive11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-pvp-enforced-server" />;
}
