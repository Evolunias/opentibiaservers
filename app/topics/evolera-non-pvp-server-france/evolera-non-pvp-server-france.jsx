import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-france');
}

export default function EvoleraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-france" />;
}
