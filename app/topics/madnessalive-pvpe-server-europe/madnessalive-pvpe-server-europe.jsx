import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-europe');
}

export default function MadnessalivePvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-europe" />;
}
