import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-evo-server');
}

export default function Madnessalive13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-evo-server" />;
}
