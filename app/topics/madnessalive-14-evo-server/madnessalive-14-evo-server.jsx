import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-evo-server');
}

export default function Madnessalive14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-evo-server" />;
}
