import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-evo-server');
}

export default function Realesta76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-evo-server" />;
}
