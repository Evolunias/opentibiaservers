import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-status');
}

export default function Tibia11NonPvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-status" />;
}
