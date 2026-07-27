import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-pvp-enforced-server');
}

export default function Alastera11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-pvp-enforced-server" />;
}
