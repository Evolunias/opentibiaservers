import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-evo-server');
}

export default function Tibiara1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-evo-server" />;
}
