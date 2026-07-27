import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-pvp-enforced-server');
}

export default function Neprenia81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-pvp-enforced-server" />;
}
