import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-pvp-enforced-server');
}

export default function Neprenia13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-pvp-enforced-server" />;
}
