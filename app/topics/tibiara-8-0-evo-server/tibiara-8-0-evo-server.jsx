import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-evo-server');
}

export default function Tibiara80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-evo-server" />;
}
