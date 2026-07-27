import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-evo-server');
}

export default function Eldera76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-evo-server" />;
}
