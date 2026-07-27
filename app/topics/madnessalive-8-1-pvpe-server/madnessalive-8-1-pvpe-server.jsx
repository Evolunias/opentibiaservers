import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-pvpe-server');
}

export default function Madnessalive81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-pvpe-server" />;
}
