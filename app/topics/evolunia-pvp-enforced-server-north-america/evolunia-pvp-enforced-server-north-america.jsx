import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-north-america');
}

export default function EvoluniaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-north-america" />;
}
