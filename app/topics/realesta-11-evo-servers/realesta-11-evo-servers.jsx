import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-evo-servers');
}

export default function Realesta11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-evo-servers" />;
}
