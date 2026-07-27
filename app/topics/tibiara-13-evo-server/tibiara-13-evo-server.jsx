import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-evo-server');
}

export default function Tibiara13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-evo-server" />;
}
