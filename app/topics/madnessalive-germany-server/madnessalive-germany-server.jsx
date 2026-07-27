import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-germany-server');
}

export default function MadnessaliveGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-germany-server" />;
}
