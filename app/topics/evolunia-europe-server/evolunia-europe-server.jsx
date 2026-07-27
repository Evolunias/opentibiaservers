import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-europe-server');
}

export default function EvoluniaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-europe-server" />;
}
