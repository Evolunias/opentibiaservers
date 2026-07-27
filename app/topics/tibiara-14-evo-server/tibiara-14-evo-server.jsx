import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-evo-server');
}

export default function Tibiara14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-evo-server" />;
}
