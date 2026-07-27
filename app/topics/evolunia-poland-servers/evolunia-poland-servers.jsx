import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-poland-servers');
}

export default function EvoluniaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-poland-servers" />;
}
