import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-usa');
}

export default function MadnessalivePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-usa" />;
}
