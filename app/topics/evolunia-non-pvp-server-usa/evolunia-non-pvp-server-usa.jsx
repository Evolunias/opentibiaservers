import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-usa');
}

export default function EvoluniaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-usa" />;
}
