import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-evo-servers');
}

export default function Eldera96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-evo-servers" />;
}
