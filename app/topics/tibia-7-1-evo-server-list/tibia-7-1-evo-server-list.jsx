import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-server-list');
}

export default function Tibia71EvoServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-server-list" />;
}
