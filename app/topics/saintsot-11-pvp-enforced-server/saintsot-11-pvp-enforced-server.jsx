import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-pvp-enforced-server');
}

export default function Saintsot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-pvp-enforced-server" />;
}
