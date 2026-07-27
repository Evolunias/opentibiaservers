import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-pvp-enforced-server');
}

export default function Tibiantis71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-pvp-enforced-server" />;
}
