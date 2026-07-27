import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-france');
}

export default function EvoluniaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-france" />;
}
