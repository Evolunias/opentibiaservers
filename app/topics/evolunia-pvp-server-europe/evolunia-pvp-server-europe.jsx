import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-europe');
}

export default function EvoluniaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-europe" />;
}
