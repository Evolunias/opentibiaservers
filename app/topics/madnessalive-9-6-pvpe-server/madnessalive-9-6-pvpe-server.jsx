import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-9-6-pvpe-server');
}

export default function Madnessalive96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-9-6-pvpe-server" />;
}
