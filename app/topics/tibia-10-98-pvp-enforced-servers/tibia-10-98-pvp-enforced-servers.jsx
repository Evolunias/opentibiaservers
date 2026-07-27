import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-enforced-servers');
}

export default function Tibia1098PvpEnforcedServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-enforced-servers" />;
}
