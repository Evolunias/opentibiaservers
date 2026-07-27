import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-6-pvpe-server');
}

export default function Madnessalive76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-6-pvpe-server" />;
}
