import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-non-pvp');
}

export default function Tibia13ServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-non-pvp" />;
}
