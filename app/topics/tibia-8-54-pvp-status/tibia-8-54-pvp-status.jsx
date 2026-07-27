import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-status');
}

export default function Tibia854PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-status" />;
}
