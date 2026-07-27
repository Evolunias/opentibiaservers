import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-uk');
}

export default function EvoluniaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-uk" />;
}
