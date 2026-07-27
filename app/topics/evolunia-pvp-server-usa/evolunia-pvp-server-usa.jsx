import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-usa');
}

export default function EvoluniaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-usa" />;
}
