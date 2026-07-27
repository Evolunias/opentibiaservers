import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-server');
}

export default function Tibia13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-server" />;
}
