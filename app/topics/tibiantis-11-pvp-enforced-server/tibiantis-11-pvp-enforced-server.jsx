import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-pvp-enforced-server');
}

export default function Tibiantis11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-pvp-enforced-server" />;
}
