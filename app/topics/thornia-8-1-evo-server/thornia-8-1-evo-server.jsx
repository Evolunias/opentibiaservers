import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-evo-server');
}

export default function Thornia81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-evo-server" />;
}
