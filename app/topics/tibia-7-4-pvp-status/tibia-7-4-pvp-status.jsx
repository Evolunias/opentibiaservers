import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-status');
}

export default function Tibia74PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-status" />;
}
