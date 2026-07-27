import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-pvp-enforced-server');
}

export default function Midhem1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-pvp-enforced-server" />;
}
