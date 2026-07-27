import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-evo-server');
}

export default function Tibiame854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-evo-server" />;
}
