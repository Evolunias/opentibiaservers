import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-pvp-enforced-server');
}

export default function Neprenia14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-pvp-enforced-server" />;
}
