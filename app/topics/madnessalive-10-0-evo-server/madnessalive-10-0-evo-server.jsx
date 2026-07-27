import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-0-evo-server');
}

export default function Madnessalive100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-0-evo-server" />;
}
