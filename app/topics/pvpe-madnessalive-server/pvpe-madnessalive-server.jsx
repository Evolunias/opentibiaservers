import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-madnessalive-server');
}

export default function PvpeMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-madnessalive-server" />;
}
