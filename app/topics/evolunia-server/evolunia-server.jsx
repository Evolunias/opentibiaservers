import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-server');
}

export default function EvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-server" />;
}
