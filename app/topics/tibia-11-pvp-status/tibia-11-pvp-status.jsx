import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-status');
}

export default function Tibia11PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-status" />;
}
