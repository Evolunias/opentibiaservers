import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-evo-server');
}

export default function Realesta772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-evo-server" />;
}
