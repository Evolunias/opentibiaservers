import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-evo-servers');
}

export default function Eldera71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-evo-servers" />;
}
