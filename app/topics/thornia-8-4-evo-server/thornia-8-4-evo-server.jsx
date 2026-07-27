import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-evo-server');
}

export default function Thornia84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-evo-server" />;
}
