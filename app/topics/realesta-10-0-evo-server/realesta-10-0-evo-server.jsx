import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-evo-server');
}

export default function Realesta100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-evo-server" />;
}
