import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-evo-servers');
}

export default function Tibiame71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-evo-servers" />;
}
