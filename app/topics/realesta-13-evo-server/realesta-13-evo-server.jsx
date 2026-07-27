import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-evo-server');
}

export default function Realesta13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-evo-server" />;
}
