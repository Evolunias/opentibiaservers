import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-evo-servers');
}

export default function Tibiame13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-evo-servers" />;
}
