import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-evo-server');
}

export default function Eldera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-evo-server" />;
}
