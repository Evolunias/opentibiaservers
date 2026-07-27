import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-evo-server');
}

export default function Madnessalive71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-evo-server" />;
}
