import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-pvp-enforced-server');
}

export default function Alastera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-pvp-enforced-server" />;
}
