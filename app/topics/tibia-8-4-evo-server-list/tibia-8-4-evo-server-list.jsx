import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-server-list');
}

export default function Tibia84EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-server-list" />;
}
