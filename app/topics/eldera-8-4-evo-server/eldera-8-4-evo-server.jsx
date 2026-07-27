import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-evo-server');
}

export default function Eldera84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-evo-server" />;
}
