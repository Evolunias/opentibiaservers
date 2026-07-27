import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-evo-server');
}

export default function Tibiara15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-evo-server" />;
}
