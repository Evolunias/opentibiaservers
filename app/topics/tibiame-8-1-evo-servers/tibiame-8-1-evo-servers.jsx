import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-evo-servers');
}

export default function Tibiame81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-evo-servers" />;
}
