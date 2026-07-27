import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-pvp-enforced-server');
}

export default function Midhem76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-pvp-enforced-server" />;
}
