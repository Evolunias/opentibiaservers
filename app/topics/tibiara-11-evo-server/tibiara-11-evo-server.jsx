import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-evo-server');
}

export default function Tibiara11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-evo-server" />;
}
