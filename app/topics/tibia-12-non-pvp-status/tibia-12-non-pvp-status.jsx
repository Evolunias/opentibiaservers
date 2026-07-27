import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-status');
}

export default function Tibia12NonPvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-status" />;
}
