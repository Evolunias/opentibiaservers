import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-evo-server');
}

export default function Thornia15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-evo-server" />;
}
