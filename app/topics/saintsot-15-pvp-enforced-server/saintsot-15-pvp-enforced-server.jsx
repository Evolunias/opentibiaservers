import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-pvp-enforced-server');
}

export default function Saintsot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-pvp-enforced-server" />;
}
