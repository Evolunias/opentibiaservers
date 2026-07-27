import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-pvp-enforced-server');
}

export default function Alastera76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-pvp-enforced-server" />;
}
