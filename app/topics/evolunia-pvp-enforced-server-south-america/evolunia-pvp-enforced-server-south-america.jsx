import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-south-america');
}

export default function EvoluniaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-south-america" />;
}
