import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-pvp-enforced-server');
}

export default function Neprenia12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-pvp-enforced-server" />;
}
