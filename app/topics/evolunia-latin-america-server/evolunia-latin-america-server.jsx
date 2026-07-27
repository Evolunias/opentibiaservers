import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-latin-america-server');
}

export default function EvoluniaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-latin-america-server" />;
}
