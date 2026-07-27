import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-pvpe-server');
}

export default function Madnessalive14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-pvpe-server" />;
}
