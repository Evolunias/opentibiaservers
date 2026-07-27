import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-pvpe-server');
}

export default function Madnessalive15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-pvpe-server" />;
}
