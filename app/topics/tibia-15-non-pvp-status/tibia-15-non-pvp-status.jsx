import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-status');
}

export default function Tibia15NonPvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-status" />;
}
