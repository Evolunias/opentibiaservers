import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-6-evo-server');
}

export default function Madnessalive76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-6-evo-server" />;
}
