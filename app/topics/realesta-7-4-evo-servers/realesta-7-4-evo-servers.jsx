import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-evo-servers');
}

export default function Realesta74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-evo-servers" />;
}
