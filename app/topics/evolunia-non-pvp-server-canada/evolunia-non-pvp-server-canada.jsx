import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-canada');
}

export default function EvoluniaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-canada" />;
}
