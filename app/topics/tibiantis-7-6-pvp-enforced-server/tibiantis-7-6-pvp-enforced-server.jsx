import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-pvp-enforced-server');
}

export default function Tibiantis76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-pvp-enforced-server" />;
}
