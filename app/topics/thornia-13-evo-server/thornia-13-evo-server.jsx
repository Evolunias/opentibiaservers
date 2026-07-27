import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-evo-server');
}

export default function Thornia13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-evo-server" />;
}
