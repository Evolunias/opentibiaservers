import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-mexico');
}

export default function MadnessalivePvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-mexico" />;
}
