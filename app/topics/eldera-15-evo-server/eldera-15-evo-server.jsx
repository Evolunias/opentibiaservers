import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-evo-server');
}

export default function Eldera15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-evo-server" />;
}
