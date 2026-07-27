import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-canada');
}

export default function MadnessalivePvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-canada" />;
}
