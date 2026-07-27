import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-germany');
}

export default function MadnessalivePvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-germany" />;
}
