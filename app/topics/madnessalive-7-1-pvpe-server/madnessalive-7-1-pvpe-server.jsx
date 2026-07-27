import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-pvpe-server');
}

export default function Madnessalive71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-pvpe-server" />;
}
