import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-madnessalive-server');
}

export default function PvpEnforcedMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-madnessalive-server" />;
}
