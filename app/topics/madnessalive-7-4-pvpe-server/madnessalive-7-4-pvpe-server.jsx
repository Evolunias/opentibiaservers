import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-pvpe-server');
}

export default function Madnessalive74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-pvpe-server" />;
}
