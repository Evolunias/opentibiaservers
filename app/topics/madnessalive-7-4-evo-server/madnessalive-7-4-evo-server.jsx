import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-4-evo-server');
}

export default function Madnessalive74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-4-evo-server" />;
}
