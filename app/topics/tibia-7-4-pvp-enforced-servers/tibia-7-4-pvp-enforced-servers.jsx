import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-servers');
}

export default function Tibia74PvpEnforcedServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-servers" />;
}
