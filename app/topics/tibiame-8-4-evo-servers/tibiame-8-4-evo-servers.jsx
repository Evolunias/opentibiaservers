import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-evo-servers');
}

export default function Tibiame84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-evo-servers" />;
}
