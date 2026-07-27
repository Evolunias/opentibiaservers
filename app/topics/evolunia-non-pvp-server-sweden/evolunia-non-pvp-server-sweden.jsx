import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-sweden');
}

export default function EvoluniaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-sweden" />;
}
