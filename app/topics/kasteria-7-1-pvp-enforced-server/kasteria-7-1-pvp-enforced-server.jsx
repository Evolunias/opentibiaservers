import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-pvp-enforced-server');
}

export default function Kasteria71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-pvp-enforced-server" />;
}
