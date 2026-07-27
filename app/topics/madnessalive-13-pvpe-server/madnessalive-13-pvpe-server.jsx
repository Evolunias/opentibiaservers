import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-pvpe-server');
}

export default function Madnessalive13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-pvpe-server" />;
}
