import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-pvp-enforced-server');
}

export default function Midhem13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-pvp-enforced-server" />;
}
