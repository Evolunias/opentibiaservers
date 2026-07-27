import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-north-america');
}

export default function EvoluniaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-north-america" />;
}
