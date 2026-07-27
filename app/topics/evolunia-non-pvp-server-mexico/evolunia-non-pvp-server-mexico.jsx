import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-mexico');
}

export default function EvoluniaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-mexico" />;
}
