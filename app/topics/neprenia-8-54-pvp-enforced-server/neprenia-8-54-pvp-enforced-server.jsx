import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-pvp-enforced-server');
}

export default function Neprenia854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-pvp-enforced-server" />;
}
