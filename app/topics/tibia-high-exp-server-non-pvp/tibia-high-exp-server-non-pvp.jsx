import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-non-pvp');
}

export default function TibiaHighExpServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-non-pvp" />;
}
