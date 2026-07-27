import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-status');
}

export default function Tibia80PvpStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-status" />;
}
