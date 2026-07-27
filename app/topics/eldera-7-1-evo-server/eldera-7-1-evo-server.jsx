import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-evo-server');
}

export default function Eldera71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-evo-server" />;
}
