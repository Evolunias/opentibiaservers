import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-server-list');
}

export default function Tibia772EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-server-list" />;
}
