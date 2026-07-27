import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-evo-servers');
}

export default function Eldera81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-evo-servers" />;
}
