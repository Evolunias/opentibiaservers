import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-evo-server');
}

export default function Realesta14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-evo-server" />;
}
