import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-evo-servers');
}

export default function Eldera76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-evo-servers" />;
}
