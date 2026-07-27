import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-client');
}

export default function EvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="evolunia-client" />;
}
