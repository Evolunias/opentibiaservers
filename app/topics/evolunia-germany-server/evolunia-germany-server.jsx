import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-germany-server');
}

export default function EvoluniaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-germany-server" />;
}
