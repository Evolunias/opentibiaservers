import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-evo-server');
}

export default function Tibiara74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-evo-server" />;
}
