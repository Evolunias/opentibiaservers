import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-server');
}

export default function Tibia14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-server" />;
}
