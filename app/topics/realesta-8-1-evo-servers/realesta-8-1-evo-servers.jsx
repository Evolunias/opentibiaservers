import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-evo-servers');
}

export default function Realesta81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-evo-servers" />;
}
