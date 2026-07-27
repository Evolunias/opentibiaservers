import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-pvp-enforced-server');
}

export default function Midhem100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-pvp-enforced-server" />;
}
