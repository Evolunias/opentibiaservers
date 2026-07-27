import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-evo-server');
}

export default function Realesta15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-evo-server" />;
}
