import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-evo-server');
}

export default function Realesta71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-evo-server" />;
}
