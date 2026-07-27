import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-pvp-enforced-server');
}

export default function Neprenia772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-pvp-enforced-server" />;
}
