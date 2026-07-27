import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-enforced-servers');
}

export default function Tibia71PvpEnforcedServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-enforced-servers" />;
}
