import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-evo-server');
}

export default function Realesta81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-evo-server" />;
}
