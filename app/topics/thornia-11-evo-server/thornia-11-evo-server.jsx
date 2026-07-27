import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-evo-server');
}

export default function Thornia11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-evo-server" />;
}
