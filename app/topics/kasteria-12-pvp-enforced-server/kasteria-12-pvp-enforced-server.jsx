import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-pvp-enforced-server');
}

export default function Kasteria12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-pvp-enforced-server" />;
}
