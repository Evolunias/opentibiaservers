import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-6-evo-server');
}

export default function Madnessalive86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-6-evo-server" />;
}
