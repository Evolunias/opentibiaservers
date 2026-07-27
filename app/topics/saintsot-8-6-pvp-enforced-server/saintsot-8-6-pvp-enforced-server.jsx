import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-pvp-enforced-server');
}

export default function Saintsot86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-pvp-enforced-server" />;
}
