import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-enforced-server-france');
}

export default function EvoluniaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-enforced-server-france" />;
}
