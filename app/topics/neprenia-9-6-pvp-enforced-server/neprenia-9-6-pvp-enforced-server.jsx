import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-pvp-enforced-server');
}

export default function Neprenia96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-pvp-enforced-server" />;
}
