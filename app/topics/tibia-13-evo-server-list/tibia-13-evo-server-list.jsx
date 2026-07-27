import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-server-list');
}

export default function Tibia13EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-server-list" />;
}
