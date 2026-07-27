import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-evo-server');
}

export default function Thornia96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-evo-server" />;
}
