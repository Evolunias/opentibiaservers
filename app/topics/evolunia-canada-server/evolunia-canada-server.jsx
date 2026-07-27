import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-canada-server');
}

export default function EvoluniaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-canada-server" />;
}
