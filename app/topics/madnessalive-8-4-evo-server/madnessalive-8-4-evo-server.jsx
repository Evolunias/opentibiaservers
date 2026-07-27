import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-4-evo-server');
}

export default function Madnessalive84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-4-evo-server" />;
}
