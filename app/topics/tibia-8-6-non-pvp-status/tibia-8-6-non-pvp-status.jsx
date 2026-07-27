import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-non-pvp-status');
}

export default function Tibia86NonPvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-non-pvp-status" />;
}
