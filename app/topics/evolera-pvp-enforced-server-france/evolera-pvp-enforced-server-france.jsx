import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-france');
}

export default function EvoleraPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-france" />;
}
