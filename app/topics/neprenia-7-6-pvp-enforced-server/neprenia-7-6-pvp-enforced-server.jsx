import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-pvp-enforced-server');
}

export default function Neprenia76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-pvp-enforced-server" />;
}
