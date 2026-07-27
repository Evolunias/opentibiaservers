import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-pvp-enforced-server');
}

export default function Tibiantis13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-pvp-enforced-server" />;
}
