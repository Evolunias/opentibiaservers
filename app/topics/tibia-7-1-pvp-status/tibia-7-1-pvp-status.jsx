import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-status');
}

export default function Tibia71PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-status" />;
}
