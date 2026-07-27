import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-pvp-enforced-server');
}

export default function Neprenia74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-pvp-enforced-server" />;
}
