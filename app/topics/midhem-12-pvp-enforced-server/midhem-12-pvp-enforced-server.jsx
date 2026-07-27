import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-pvp-enforced-server');
}

export default function Midhem12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-pvp-enforced-server" />;
}
