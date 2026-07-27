import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-poland');
}

export default function MadnessalivePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-poland" />;
}
