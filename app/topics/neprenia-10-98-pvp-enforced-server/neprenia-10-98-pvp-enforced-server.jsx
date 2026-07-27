import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-pvp-enforced-server');
}

export default function Neprenia1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-pvp-enforced-server" />;
}
