import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-evo-server');
}

export default function Tibiara84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-evo-server" />;
}
