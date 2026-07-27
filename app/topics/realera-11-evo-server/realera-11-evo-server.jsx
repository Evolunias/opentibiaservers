import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-evo-server');
}

export default function Realera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-evo-server" />;
}
