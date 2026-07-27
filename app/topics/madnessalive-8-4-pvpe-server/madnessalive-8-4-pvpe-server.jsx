import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-pvpe-server');
}

export default function Madnessalive84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-pvpe-server" />;
}
