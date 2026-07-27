import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-argentina');
}

export default function MadnessalivePvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-argentina" />;
}
