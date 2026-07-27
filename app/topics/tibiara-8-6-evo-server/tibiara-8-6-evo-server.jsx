import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-evo-server');
}

export default function Tibiara86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-evo-server" />;
}
