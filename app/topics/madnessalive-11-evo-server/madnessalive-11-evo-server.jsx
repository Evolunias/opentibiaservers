import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-evo-server');
}

export default function Madnessalive11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-evo-server" />;
}
