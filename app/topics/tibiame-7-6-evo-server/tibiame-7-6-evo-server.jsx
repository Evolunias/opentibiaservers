import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-evo-server');
}

export default function Tibiame76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-evo-server" />;
}
