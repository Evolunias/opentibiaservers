import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-pvp-enforced-server');
}

export default function Midhem74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-pvp-enforced-server" />;
}
