import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-evo-server');
}

export default function Tibiame84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-evo-server" />;
}
