import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-pvp-enforced-server');
}

export default function Neprenia84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-pvp-enforced-server" />;
}
