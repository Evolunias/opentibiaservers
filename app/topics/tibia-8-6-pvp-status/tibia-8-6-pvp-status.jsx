import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-status');
}

export default function Tibia86PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-status" />;
}
