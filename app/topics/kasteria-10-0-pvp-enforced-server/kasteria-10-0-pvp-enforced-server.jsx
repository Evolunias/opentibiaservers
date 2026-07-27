import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-pvp-enforced-server');
}

export default function Kasteria100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-pvp-enforced-server" />;
}
