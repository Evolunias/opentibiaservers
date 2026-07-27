import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-latin-america-servers');
}

export default function EvoluniaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-latin-america-servers" />;
}
