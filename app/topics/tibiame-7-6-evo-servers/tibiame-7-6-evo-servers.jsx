import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-evo-servers');
}

export default function Tibiame76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-evo-servers" />;
}
