import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-evo-server');
}

export default function Madnessalive81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-evo-server" />;
}
