import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-usa-server');
}

export default function EvoluniaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-usa-server" />;
}
