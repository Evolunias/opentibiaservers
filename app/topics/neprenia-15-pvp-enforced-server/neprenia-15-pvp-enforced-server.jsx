import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-pvp-enforced-server');
}

export default function Neprenia15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-pvp-enforced-server" />;
}
