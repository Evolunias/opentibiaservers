import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-pvp-enforced-server');
}

export default function Midhem854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-pvp-enforced-server" />;
}
