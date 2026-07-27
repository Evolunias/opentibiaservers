import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-evo-server');
}

export default function Tibiame86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-evo-server" />;
}
