import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-evo-server');
}

export default function Tibiame14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-evo-server" />;
}
