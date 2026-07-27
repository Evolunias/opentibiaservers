import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-evo-server');
}

export default function Tibiara772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-evo-server" />;
}
