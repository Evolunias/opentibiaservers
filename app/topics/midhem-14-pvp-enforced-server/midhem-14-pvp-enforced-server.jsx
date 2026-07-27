import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-pvp-enforced-server');
}

export default function Midhem14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-pvp-enforced-server" />;
}
