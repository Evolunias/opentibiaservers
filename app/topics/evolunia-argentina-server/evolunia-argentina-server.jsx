import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-argentina-server');
}

export default function EvoluniaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-argentina-server" />;
}
