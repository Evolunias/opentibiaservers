import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-pvp');
}

export default function TibiaHighExpServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-pvp" />;
}
