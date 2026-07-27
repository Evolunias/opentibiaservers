import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-pvp-enforced-server');
}

export default function Saintsot14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-pvp-enforced-server" />;
}
