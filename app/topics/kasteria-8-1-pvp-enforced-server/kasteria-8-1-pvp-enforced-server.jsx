import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-pvp-enforced-server');
}

export default function Kasteria81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-pvp-enforced-server" />;
}
