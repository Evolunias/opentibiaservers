import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-evo-server');
}

export default function Eldera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-evo-server" />;
}
