import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-evo-server');
}

export default function Eldera772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-evo-server" />;
}
