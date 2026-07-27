import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-argentina');
}

export default function EvoluniaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-argentina" />;
}
