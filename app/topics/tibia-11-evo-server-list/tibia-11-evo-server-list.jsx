import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-server-list');
}

export default function Tibia11EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-server-list" />;
}
