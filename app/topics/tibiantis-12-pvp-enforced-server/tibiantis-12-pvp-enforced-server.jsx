import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-pvp-enforced-server');
}

export default function Tibiantis12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-pvp-enforced-server" />;
}
