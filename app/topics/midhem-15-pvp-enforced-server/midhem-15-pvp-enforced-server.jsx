import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-pvp-enforced-server');
}

export default function Midhem15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-pvp-enforced-server" />;
}
