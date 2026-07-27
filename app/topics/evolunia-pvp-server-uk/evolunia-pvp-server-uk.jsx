import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-uk');
}

export default function EvoluniaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-uk" />;
}
