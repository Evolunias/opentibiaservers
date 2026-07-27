import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-evo-servers');
}

export default function Eldera13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-evo-servers" />;
}
