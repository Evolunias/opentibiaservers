import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-usa');
}

export default function EvoluniaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-usa" />;
}
