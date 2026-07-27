import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-pvp-enforced-server');
}

export default function Tibiantis96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-pvp-enforced-server" />;
}
