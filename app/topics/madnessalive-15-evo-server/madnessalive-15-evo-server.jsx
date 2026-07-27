import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-evo-server');
}

export default function Madnessalive15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-evo-server" />;
}
