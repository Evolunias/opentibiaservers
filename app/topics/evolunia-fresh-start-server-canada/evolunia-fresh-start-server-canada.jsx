import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-canada');
}

export default function EvoluniaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-canada" />;
}
