import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-madnessalive-server');
}

export default function NonPvpMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-madnessalive-server" />;
}
