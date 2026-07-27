import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-6-evo-server');
}

export default function Thornia86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-6-evo-server" />;
}
