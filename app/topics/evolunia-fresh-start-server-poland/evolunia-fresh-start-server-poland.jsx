import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-poland');
}

export default function EvoluniaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-poland" />;
}
