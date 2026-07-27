import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-pvp-enforced-server');
}

export default function Saintsot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-pvp-enforced-server" />;
}
