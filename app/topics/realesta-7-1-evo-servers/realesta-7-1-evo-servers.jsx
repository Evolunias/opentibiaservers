import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-evo-servers');
}

export default function Realesta71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-evo-servers" />;
}
