import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-evo-server');
}

export default function Thornia74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-evo-server" />;
}
