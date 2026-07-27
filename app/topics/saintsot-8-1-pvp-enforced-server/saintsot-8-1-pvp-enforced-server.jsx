import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-pvp-enforced-server');
}

export default function Saintsot81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-pvp-enforced-server" />;
}
