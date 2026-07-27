import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-canada-servers');
}

export default function EvoluniaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-canada-servers" />;
}
