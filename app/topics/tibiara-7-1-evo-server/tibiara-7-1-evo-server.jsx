import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-evo-server');
}

export default function Tibiara71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-evo-server" />;
}
