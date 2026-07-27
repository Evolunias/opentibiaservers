import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-uk');
}

export default function MadnessalivePvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-uk" />;
}
