import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-europe-servers');
}

export default function EvoluniaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-europe-servers" />;
}
