import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-pvp-enforced-server');
}

export default function Kasteria13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-pvp-enforced-server" />;
}
