import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-evo-server');
}

export default function Tibiame80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-evo-server" />;
}
