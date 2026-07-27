import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-status');
}

export default function Tibia13PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-status" />;
}
