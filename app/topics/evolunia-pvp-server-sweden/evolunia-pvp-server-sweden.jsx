import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-sweden');
}

export default function EvoluniaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-sweden" />;
}
