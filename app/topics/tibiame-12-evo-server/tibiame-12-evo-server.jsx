import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-evo-server');
}

export default function Tibiame12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-evo-server" />;
}
