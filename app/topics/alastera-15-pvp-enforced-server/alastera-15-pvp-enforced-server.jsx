import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-pvp-enforced-server');
}

export default function Alastera15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-pvp-enforced-server" />;
}
