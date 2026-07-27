import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-evo-server');
}

export default function Tibiame96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-evo-server" />;
}
