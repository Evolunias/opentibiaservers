import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-evo-servers');
}

export default function Tibiame74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-evo-servers" />;
}
