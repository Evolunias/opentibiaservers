import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-poland-server');
}

export default function EvoluniaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-poland-server" />;
}
