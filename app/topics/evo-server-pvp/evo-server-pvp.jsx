import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-pvp');
}

export default function EvoServerPvpKeywordPage() {
  return <StaticKeywordPage slug="evo-server-pvp" />;
}
