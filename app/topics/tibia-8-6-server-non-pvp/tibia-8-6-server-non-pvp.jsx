import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-non-pvp');
}

export default function Tibia86ServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-non-pvp" />;
}
