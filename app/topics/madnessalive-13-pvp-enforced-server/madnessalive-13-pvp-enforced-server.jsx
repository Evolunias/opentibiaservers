import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-pvp-enforced-server');
}

export default function Madnessalive13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-pvp-enforced-server" />;
}
