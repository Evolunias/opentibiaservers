import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-pvp-enforced-server');
}

export default function Kasteria74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-pvp-enforced-server" />;
}
