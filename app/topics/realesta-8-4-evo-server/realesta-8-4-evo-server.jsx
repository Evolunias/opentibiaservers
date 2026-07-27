import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-evo-server');
}

export default function Realesta84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-evo-server" />;
}
