import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-status');
}

export default function Tibia76PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-status" />;
}
