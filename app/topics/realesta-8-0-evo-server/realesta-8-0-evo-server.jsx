import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-evo-server');
}

export default function Realesta80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-evo-server" />;
}
