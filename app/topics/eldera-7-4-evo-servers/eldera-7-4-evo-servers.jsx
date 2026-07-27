import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-evo-servers');
}

export default function Eldera74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-evo-servers" />;
}
