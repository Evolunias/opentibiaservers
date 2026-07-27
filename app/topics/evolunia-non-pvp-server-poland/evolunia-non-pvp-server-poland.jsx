import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-poland');
}

export default function EvoluniaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-poland" />;
}
