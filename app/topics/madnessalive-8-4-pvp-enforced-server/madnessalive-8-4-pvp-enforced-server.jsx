import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-pvp-enforced-server');
}

export default function Madnessalive84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-pvp-enforced-server" />;
}
