import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-pvp-enforced-server');
}

export default function Alastera12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-pvp-enforced-server" />;
}
