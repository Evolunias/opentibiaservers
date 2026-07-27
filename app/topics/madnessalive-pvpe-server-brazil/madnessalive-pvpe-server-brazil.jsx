import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-brazil');
}

export default function MadnessalivePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-brazil" />;
}
