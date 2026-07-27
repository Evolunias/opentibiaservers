import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-evo-servers');
}

export default function Tibiame100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-evo-servers" />;
}
