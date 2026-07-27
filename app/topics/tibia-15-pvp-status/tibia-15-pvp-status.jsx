import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-status');
}

export default function Tibia15PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-status" />;
}
