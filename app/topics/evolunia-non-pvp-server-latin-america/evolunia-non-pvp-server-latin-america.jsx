import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-latin-america');
}

export default function EvoluniaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-latin-america" />;
}
