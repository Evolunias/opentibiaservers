import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-server');
}

export default function Tibia74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-server" />;
}
