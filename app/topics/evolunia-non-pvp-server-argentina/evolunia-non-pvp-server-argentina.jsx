import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-argentina');
}

export default function EvoluniaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-argentina" />;
}
