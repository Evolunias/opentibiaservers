import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-evo-server');
}

export default function Madnessalive12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-evo-server" />;
}
