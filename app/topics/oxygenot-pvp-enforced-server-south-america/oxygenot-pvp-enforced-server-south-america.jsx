import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-south-america');
}

export default function OxygenotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-south-america" />;
}
