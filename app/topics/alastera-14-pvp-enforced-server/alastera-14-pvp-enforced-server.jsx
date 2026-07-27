import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-pvp-enforced-server');
}

export default function Alastera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-pvp-enforced-server" />;
}
