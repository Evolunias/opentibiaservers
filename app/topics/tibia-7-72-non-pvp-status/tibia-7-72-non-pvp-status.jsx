import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-status');
}

export default function Tibia772NonPvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-status" />;
}
