import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-evo-server');
}

export default function Thornia1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-evo-server" />;
}
