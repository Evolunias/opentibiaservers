import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-evo-server');
}

export default function Eldera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-evo-server" />;
}
