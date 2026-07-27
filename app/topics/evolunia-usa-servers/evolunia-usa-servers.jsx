import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-usa-servers');
}

export default function EvoluniaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-usa-servers" />;
}
