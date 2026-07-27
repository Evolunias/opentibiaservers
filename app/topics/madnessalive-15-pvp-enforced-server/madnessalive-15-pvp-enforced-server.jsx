import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-pvp-enforced-server');
}

export default function Madnessalive15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-pvp-enforced-server" />;
}
