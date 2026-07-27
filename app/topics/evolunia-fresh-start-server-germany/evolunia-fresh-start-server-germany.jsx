import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-germany');
}

export default function EvoluniaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-germany" />;
}
