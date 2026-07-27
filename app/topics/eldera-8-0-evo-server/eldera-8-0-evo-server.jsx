import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-evo-server');
}

export default function Eldera80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-evo-server" />;
}
