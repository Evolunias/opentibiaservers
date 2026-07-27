import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-pvp-enforced-server');
}

export default function Medivia74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-pvp-enforced-server" />;
}
