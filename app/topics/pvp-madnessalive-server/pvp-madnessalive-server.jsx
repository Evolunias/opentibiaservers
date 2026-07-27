import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-madnessalive-server');
}

export default function PvpMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-madnessalive-server" />;
}
