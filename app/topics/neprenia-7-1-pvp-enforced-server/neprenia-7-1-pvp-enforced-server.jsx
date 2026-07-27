import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-pvp-enforced-server');
}

export default function Neprenia71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-pvp-enforced-server" />;
}
