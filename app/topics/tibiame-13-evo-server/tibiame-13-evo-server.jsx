import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-evo-server');
}

export default function Tibiame13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-evo-server" />;
}
