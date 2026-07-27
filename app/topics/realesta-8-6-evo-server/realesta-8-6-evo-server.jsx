import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-evo-server');
}

export default function Realesta86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-evo-server" />;
}
