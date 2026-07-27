import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-pvp-enforced-server');
}

export default function Alastera13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-pvp-enforced-server" />;
}
