import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-evo-server');
}

export default function Tibiara81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-evo-server" />;
}
