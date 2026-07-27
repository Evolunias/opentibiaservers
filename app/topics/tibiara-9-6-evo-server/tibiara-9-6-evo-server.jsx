import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-evo-server');
}

export default function Tibiara96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-evo-server" />;
}
