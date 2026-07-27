import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-pvp-enforced-server');
}

export default function Kasteria15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-pvp-enforced-server" />;
}
