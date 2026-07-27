import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-europe');
}

export default function EvoleraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-europe" />;
}
