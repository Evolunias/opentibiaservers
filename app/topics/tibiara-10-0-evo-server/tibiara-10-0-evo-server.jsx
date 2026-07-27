import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-evo-server');
}

export default function Tibiara100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-evo-server" />;
}
