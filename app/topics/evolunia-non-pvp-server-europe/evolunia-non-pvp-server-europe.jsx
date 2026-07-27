import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-europe');
}

export default function EvoluniaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-europe" />;
}
