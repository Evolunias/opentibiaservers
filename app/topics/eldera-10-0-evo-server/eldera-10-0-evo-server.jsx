import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-evo-server');
}

export default function Eldera100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-evo-server" />;
}
