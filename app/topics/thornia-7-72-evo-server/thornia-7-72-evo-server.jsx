import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-evo-server');
}

export default function Thornia772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-evo-server" />;
}
