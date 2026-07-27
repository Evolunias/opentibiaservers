import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-evo-server');
}

export default function Eldera96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-evo-server" />;
}
