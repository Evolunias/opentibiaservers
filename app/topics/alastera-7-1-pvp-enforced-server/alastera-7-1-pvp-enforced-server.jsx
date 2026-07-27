import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-pvp-enforced-server');
}

export default function Alastera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-pvp-enforced-server" />;
}
