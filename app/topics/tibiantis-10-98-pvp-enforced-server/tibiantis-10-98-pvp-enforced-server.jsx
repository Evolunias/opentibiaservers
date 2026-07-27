import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-pvp-enforced-server');
}

export default function Tibiantis1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-pvp-enforced-server" />;
}
