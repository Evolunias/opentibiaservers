import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-pvp-enforced-server');
}

export default function Tibiantis15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-pvp-enforced-server" />;
}
