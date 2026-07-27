import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-pvp-enforced-server');
}

export default function Neprenia100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-pvp-enforced-server" />;
}
