import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-server-list');
}

export default function Tibia81EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-server-list" />;
}
