import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-status');
}

export default function Tibia772PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-status" />;
}
