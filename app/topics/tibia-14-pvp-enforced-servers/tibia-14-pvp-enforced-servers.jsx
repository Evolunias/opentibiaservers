import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-servers');
}

export default function Tibia14PvpEnforcedServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-servers" />;
}
