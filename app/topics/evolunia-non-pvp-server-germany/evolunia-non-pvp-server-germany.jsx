import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-germany');
}

export default function EvoluniaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-germany" />;
}
