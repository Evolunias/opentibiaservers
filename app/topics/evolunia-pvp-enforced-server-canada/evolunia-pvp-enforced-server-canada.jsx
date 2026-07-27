import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-canada');
}

export default function EvoluniaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-canada" />;
}
