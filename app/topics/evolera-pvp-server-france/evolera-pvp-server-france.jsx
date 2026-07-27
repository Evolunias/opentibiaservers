import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-france');
}

export default function EvoleraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-france" />;
}
